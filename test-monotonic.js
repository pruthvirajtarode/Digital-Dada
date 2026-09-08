function checkMonotonic(name, arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      console.error(`FAILED: ${name} ->`, arr);
      return;
    }
  }
  console.log(`PASSED: ${name}`);
}

// ProblemSection
checkMonotonic("objectScale", [0, 0.2, 0.7, 0.9]);
checkMonotonic("objectOpacity", [0, 0.2]);
checkMonotonic("tasksOpacity", [0.2, 0.3, 0.6, 0.7]);
checkMonotonic("tasksScale", [0.2, 0.4, 0.6, 0.8]);
checkMonotonic("finalOpacity", [0.7, 0.8]);
checkMonotonic("finalScale", [0.7, 0.9]);
checkMonotonic("xOffset", [0.5, 0.7]);
checkMonotonic("yOffset", [0.5, 0.7]);

// HumanVsAi
checkMonotonic("phase1Opacity", [0, 0.2, 0.3]);
checkMonotonic("phase1Scale", [0, 0.3]);
checkMonotonic("chaosOpacity", [0.3, 0.35, 0.6, 0.65]);
checkMonotonic("t1Y", [0.3, 0.6]);
checkMonotonic("t5Opacity", [0.3, 0.45, 0.6]);
checkMonotonic("phase3Opacity", [0.7, 0.8]);
checkMonotonic("phase3Scale", [0.7, 1.0]);

// HomeHero
checkMonotonic("o1", [0, 0.15, 0.2]);
checkMonotonic("o2", [0.15, 0.2, 0.35, 0.4]);
checkMonotonic("o3", [0.35, 0.4, 0.55, 0.6]);
checkMonotonic("o4", [0.55, 0.6, 0.75, 0.8]);
checkMonotonic("o5", [0.75, 0.8, 1]);
checkMonotonic("s5", [0.75, 0.9, 1]);

// HowItWorks
const totalSteps = 6;
for (let i=0; i<totalSteps; i++) {
  const stepStart = i / totalSteps;
  const stepEnd = (i + 1) / totalSteps;
  const stepCenter = (stepStart + stepEnd) / 2;
  checkMonotonic(`HowItWorks opacity ${i}`, [stepStart - 0.05, stepCenter, stepEnd + 0.05]);
  checkMonotonic(`HowItWorks yImg ${i}`, [stepStart, stepEnd]);
}
