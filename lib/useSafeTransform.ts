import { useTransform as framerUseTransform, MotionValue } from "framer-motion";

export function useSafeTransform(
  value: MotionValue<number>,
  inputRange: number[],
  outputRange: any[],
  options?: any
) {
  // Check if inputRange is monotonic
  let isMonotonic = true;
  for (let i = 1; i < inputRange.length; i++) {
    if (inputRange[i] < inputRange[i - 1]) {
      isMonotonic = false;
      break;
    }
  }

  let safeInput = [...inputRange];
  let safeOutput = [...outputRange];

  if (!isMonotonic) {
    console.error("USE-TRANSFORM FIXED! Original was not monotonic:", inputRange);
    
    // Create pairs, sort by input, then unzip
    const pairs = safeInput.map((val, i) => ({ in: val, out: safeOutput[i] }));
    pairs.sort((a, b) => a.in - b.in);
    
    safeInput = pairs.map(p => p.in);
    safeOutput = pairs.map(p => p.out);
  }

  // Ensure no NaN
  if (safeInput.some(isNaN)) {
    console.error("USE-TRANSFORM FIXED! NaN found in input:", safeInput);
    safeInput = safeInput.map(x => isNaN(x) ? 0 : x);
  }

  // Ensure unique strictly increasing by adding a tiny epsilon if there are duplicates
  // Actually Framer Motion allows duplicates (e.g. [0, 0.5, 0.5, 1]) in newer versions,
  // but older versions or specific setups might crash. Let's ensure strictly increasing.
  for (let i = 1; i < safeInput.length; i++) {
    if (safeInput[i] <= safeInput[i - 1]) {
      safeInput[i] = safeInput[i - 1] + 0.00001;
    }
  }

  return framerUseTransform(value, safeInput, safeOutput, options);
}
