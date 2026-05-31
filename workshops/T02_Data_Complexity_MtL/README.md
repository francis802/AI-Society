# T02 - Data Complexity and Meta-Learning

Hands-on tutorial on **data complexity measures** and **meta-learning**: quantifying
how hard a classification problem is, both at the dataset level and the individual
instance level, and studying how removing a key feature changes that difficulty.

## Dataset

**Obesity Levels Dataset** ([`technical_tutorial/obesity.csv`](technical_tutorial/obesity.csv)) -
lifestyle and physical features used to classify obesity levels. **BMI** is a
strong, near-deterministic separator of the classes.

## What was done

- **Dataset-level complexity** with **`problexity`** (`ComplexityCalculator`):
  normalized complexity metrics (Fisher's discriminant, overlap, density, hubs,
  network/topology measures) computed and visualised.
- **Meta-features** extracted with **`pymfe`** (the MFE library), dumped to
  [`mfe_with_bmi.txt`](technical_tutorial/mfe_with_bmi.txt) and
  [`mfe_without_bmi.txt`](technical_tutorial/mfe_without_bmi.txt).
- **Instance Hardness and Instance Space Analysis** with **`pyhard`**, producing the
  [`instance_space_analysis/`](technical_tutorial/instance_space_analysis/) artifacts
  (coordinates, footprints per algorithm, instance-hardness scores, trained model).
- **With-BMI vs. without-BMI comparison**: complexity recomputed after dropping the
  `BMI` column to measure how much that single feature drives separability
  (`complexity_with_bmi.png` vs. `complexity_without_bmi.png`).

## Key takeaway

The dataset is easy to classify largely because BMI cleanly separates the classes;
removing it raises the measured complexity, demonstrating how a single feature can
dominate problem difficulty and how complexity metrics make this measurable.

## Files

- `Data_Complexity_Meta_learning.pdf` - workshop slides / brief.
- `technical_tutorial/tutorial.ipynb` - the notebook.
- `technical_tutorial/obesity.csv` - dataset.
- `technical_tutorial/instance_space_analysis/` - PyHard ISA outputs.
- `technical_tutorial/complexity_with_bmi.png`, `complexity_without_bmi.png` - complexity comparison plots.
- `technical_tutorial/mfe_with_bmi.txt`, `mfe_without_bmi.txt` - pymfe meta-feature dumps.

## Tools

`problexity`, `pymfe`, `pyhard`, `pandas`, `numpy`, `matplotlib`/`seaborn`,
`scikit-learn`.
