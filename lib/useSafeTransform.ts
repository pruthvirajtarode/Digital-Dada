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

  // WAAPI ScrollTimeline CRASH FIX: WAAPI strictly requires offsets to be between 0 and 1.
  // If Framer Motion passes negative values (e.g. -0.05) or >1 (e.g. 1.05) to WAAPI, 
  // WAAPI throws "Offsets must be monotonically non-decreasing".
  // We must clamp all inputs to [0, 1].
  safeInput = safeInput.map(x => Math.max(0, Math.min(1, x)));

  // Ensure unique strictly increasing by adding a tiny epsilon if there are duplicates
  // This is required because after clamping (e.g., [-0.5, 0] becomes [0, 0]), 
  // we might introduce duplicates that break monotonicity.
  for (let i = 1; i < safeInput.length; i++) {
    if (safeInput[i] <= safeInput[i - 1]) {
      safeInput[i] = safeInput[i - 1] + 0.000001;
    }
  }

  // Final safety check to make sure the epsilon didn't push us over 1
  safeInput = safeInput.map(x => Math.min(1, x));

  // If the epsilon clamping caused duplicates at 1 (e.g., [1, 1]), fix backwards
  for (let i = safeInput.length - 2; i >= 0; i--) {
    if (safeInput[i] >= safeInput[i + 1]) {
      safeInput[i] = safeInput[i + 1] - 0.000001;
    }
  }

  return framerUseTransform(value, safeInput, safeOutput, options);
}
