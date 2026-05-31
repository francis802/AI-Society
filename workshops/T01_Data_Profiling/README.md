# T01 - Data-Centric AI and Data Profiling

Hands-on tutorial on **data profiling** as the foundation of the *Data-Centric AI*
paradigm: understanding a dataset's structure, errors, descriptive statistics, and
subgroup distributions before any modelling takes place.

## Dataset

**MBA Admission Dataset** ([`technical_tutorial/MBA.csv`](technical_tutorial/MBA.csv)) -
applicant records with demographic attributes (gender, race), academic and
professional features, and a binary admission outcome.

## What was done

- Manual data overview with `pandas` (`df.info()`, `df.describe()`, missing-value
  inspection, `?` treated as `NaN`).
- Analysis of admission subgroups by **race** and **gender** to surface
  distributional differences.
- Automated profiling with **`ydata-profiling`** (`ProfileReport`), generating a
  full HTML report covering variable types, correlations, missing values, and
  distribution warnings.

## Key takeaway

Profiling exposes data-quality issues and demographic imbalances early, motivating
the fairness concerns explored in the flagship case study.

## Files

- `ias_ia01.pdf` - workshop slides / brief.
- `technical_tutorial/ias01_202108735.ipynb` - the notebook.
- `technical_tutorial/MBA.csv` - dataset.

## Tools

`pandas`, `matplotlib`/`seaborn`, `ydata-profiling`.
