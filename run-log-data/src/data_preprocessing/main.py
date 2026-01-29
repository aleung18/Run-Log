import pandas as pd


def preprocess_data(data:dict) -> pd.DataFrame:

    return pd.json_normalize(data)


# 9/3/24, there seems to be an issue with pandas, possibly the version?