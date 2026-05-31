# T04 - Missing Data

Hands-on tutorial on **missing-data mechanisms** and **imputation**: simulating the
three classic missingness mechanisms and measuring how different imputation
strategies affect downstream model performance.

## Dataset

**Heart Disease Dataset** ([`code/heart.csv`](code/heart.csv)) - clinical features
with a binary heart-disease target.

## What was done

- Missingness injected with the **`mdatagen`** library to simulate the three
  mechanisms (univariate generators on the `ST_Slope` column):
  - **MCAR** - Missing Completely At Random.
  - **MAR** - Missing At Random, conditioned on the observed `Age` column.
  - **MNAR** - Missing Not At Random, conditioned on the missing values themselves.
- Imputation compared across **`SimpleImputer` (mean)**, **`KNNImputer`**, and
  **`IterativeImputer` (MICE)** from scikit-learn, against a no-missing-data baseline.
- Downstream classifier (`DecisionTreeClassifier`) performance differences plotted per
  mechanism: `figures/performance_differences_MCAR.png`, `_MAR.png`, `_MNAR.png`.

## Key takeaway

The best imputer depends on the missingness mechanism. For **MCAR**, simple mean
imputation was best (missingness carries no signal). For **MAR**, mechanism-aware
imputers (`KNN`, and especially **MICE**) outperformed the mean by exploiting the
relationship with observed features.

## Files

- `report-202108735.pdf` - workshop report.
- `code/tutorial.ipynb` - the notebook.
- `code/heart.csv` - dataset.
- `figures/performance_differences_MCAR.png`, `_MAR.png`, `_MNAR.png` - per-mechanism results.

## Tools

`scikit-learn` (`SimpleImputer`, `KNNImputer`, `IterativeImputer`), `mdatagen`,
`pandas`, `numpy`, `matplotlib`/`seaborn`.
