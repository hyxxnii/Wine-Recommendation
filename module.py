import pandas as pd
import numpy as np
import pickle
import warnings

warnings.filterwarnings('ignore')

# 와인 이름을 넣으면 해당 와인과 비슷한 Top 10의 id를 return
def food_recommendation(input_name):
    # pickle 불러오기
    # 와인 데이터
    with open('./wine_final.pickle', 'rb') as f:
        data = pickle.load(f)
    # 음식 유사도
    with open('./food_sim.pickle', 'rb') as f:
        food_sim = pickle.load(f)
    # 맛 유사도
    with open('./flavor_sim.pickle', 'rb') as f:
        flavor_sim = pickle.load(f)
    # 품종 유사도
    with open('./kind_sim.pickle', 'rb') as f:
        kind_sim = pickle.load(f)

    new_sim = 0.3 * flavor_sim + 0.2 * kind_sim + 0.5 * food_sim

    # 고유 id로 index 찾기
    idx = data.index[data['이름'] == input_name].tolist()  # Int64Index 형식이라 list로 바꾸어줌
    k = data.iloc[idx[0]]['종류']  # 와인 종류

    # 해당 index의 유사도 리스트 sort in descending order
    score_series = pd.Series(new_sim[idx[0]]).sort_values(ascending=False)

    # 와인의 종류가 같은 것만(레드, 화이트..)
    # 유사도 Top 10의 index 추출
    top10_df = data.loc[score_series.index]
    top_10_indexes = list(top10_df[top10_df['종류'] == k].iloc[1:11].index)
    top_10_id = list(top10_df[top10_df['종류'] == k].iloc[1:11]['id'])
    top_10_kind = list(top10_df[top10_df['종류'] == k].iloc[1:11]['품종'])
    top_10_sugar = list(top10_df[top10_df['종류'] == k].iloc[1:11]['당도'])
    top_10_acid = list(top10_df[top10_df['종류'] == k].iloc[1:11]['산도'])
    top_10_body = list(top10_df[top10_df['종류'] == k].iloc[1:11]['바디'])
    top_10_tanin = list(top10_df[top10_df['종류'] == k].iloc[1:11]['타닌'])
    top_10_food = list(top10_df[top10_df['종류'] == k].iloc[1:11]['food'])
    top_10_aroma = list(top10_df[top10_df['종류'] == k].iloc[1:11]['aroma'])
    top_10_region = list(top10_df[top10_df['종류'] == k].iloc[1:11]['생산지역'])
    top_10_price = list(top10_df[top10_df['종류'] == k].iloc[1:11]['가격'])

    # 추천 와인 이름을 담기 위한 empty list 생성
    top_10_name = []

    # id list
    for i in top_10_indexes:
        name = data.loc[i]['이름']
        top_10_name.append(name)

    result_dict = dict({
        'id': top_10_id,
        'name': top_10_name,
        'kind': top_10_kind,
        'sugar': top_10_sugar,
        'acid': top_10_acid,
        'body': top_10_body,
        'tanin': top_10_tanin,
        'food': top_10_food,
        'aroma': top_10_aroma,
        'region': top_10_region,
        'price': top_10_price,
    })

    return result_dict