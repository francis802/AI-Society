# T03 - Imbalanced Data

Hands-on tutorial on **handling class imbalance**: comparing resampling techniques
on a skewed multiclass medical dataset and measuring their effect on classifier
performance.

## Dataset

**Fetal Health Dataset** ([`technical_tutorial/fetal_health.csv`](technical_tutorial/fetal_health.csv)) -
cardiotocography (CTG) features classifying fetal health as **Normal (1)**,
**Suspect (2)**, or **Pathological (3)**. The classes are strongly imbalanced toward
Normal.

## What was done

- Data profiling, scaling (`StandardScaler`), and a train/test split.
- Baseline classification with several models (`RandomForestClassifier`,
  `KNeighborsClassifier`, `LogisticRegression`) evaluated with
  `classification_report` and confusion matrices.
- A sweep of **`imbalanced-learn`** resampling strategies:
  `RandomOverSampler`, `RandomUnderSampler`, `SMOTE`, `BorderlineSMOTE`, `ADASYN`,
  `SMOTEENN`, and `SMOTETomek`, comparing average recall and F1.

## Key takeaway

Resampling materially improves minority-class recall. In the notebook's runs,
`RandomOverSampler` gave the best average recall/F1, while the hybrid `SMOTEENN`
performed worst, showing that the right technique depends on the data and that more
elaborate methods are not always better.

## Files

- `IA03_Imbalanced_Data.pdf` - workshop slides / brief.
- `technical_tutorial/tutorial.ipynb` - the notebook.
- `technical_tutorial/fetal_health.csv` - dataset.

## Tools

`imbalanced-learn`, `scikit-learn`, `pandas`, `numpy`, `matplotlib`/`seaborn`.
