import pandas as pd
import pickle

# 와인 이름을 넣으면 해당 와인과 비슷한 Top 10의 id를 return
def food_recommendation(input_name):
# 데이터 불러오기
    # 와인 데이터
    with open('./data/wine_final.pickle', 'rb') as f:
        data = pickle.load(f)
    # 음식 유사도
    with open('./data/food_sim.pickle', 'rb') as f:
        food_sim = pickle.load(f)
    # 맛 유사도
    with open('./data/flavor_sim.pickle', 'rb') as f:
        flavor_sim = pickle.load(f)
    # 품종 유사도
    with open('./data/kind_sim.pickle', 'rb') as f:
        kind_sim = pickle.load(f)

    new_sim = 0.3 * flavor_sim + 0.2 * kind_sim + 0.5 * food_sim

    # 고유 id로 index 찾기
    idx = data.index[data['이름'] == input_name].tolist()  # Int64Index 형식이라 list로 바꾸어줌
    k = data.iloc[idx[0]]['종류']  # 와인 종류

    # 해당 index의 유사도 리스트 sort in descending order
    score_series = pd.Series(new_sim[idx[0]]).sort_values(ascending=False)

    # 와인의 종류가 같은 것만(레드, 화이트..)
    # 유사도 Top 9의 index 추출
    top9_df = data.loc[score_series.index]
    top_9_indexes = list(top9_df[top9_df['종류'] == k].iloc[1:10].index)
    top_9_id = list(top9_df[top9_df['종류'] == k].iloc[1:10]['id'])
    top_9_kind = list(top9_df[top9_df['종류'] == k].iloc[1:10]['품종'])
    top_9_sugar = list(top9_df[top9_df['종류'] == k].iloc[1:10]['당도'])
    top_9_acid = list(top9_df[top9_df['종류'] == k].iloc[1:10]['산도'])
    top_9_body = list(top9_df[top9_df['종류'] == k].iloc[1:10]['바디'])
    top_9_tanin = list(top9_df[top9_df['종류'] == k].iloc[1:10]['타닌'])
    top_9_food = list(top9_df[top9_df['종류'] == k].iloc[1:10]['food'])
    top_9_aroma = list(top9_df[top9_df['종류'] == k].iloc[1:10]['aroma'])
    top_9_region = list(top9_df[top9_df['종류'] == k].iloc[1:10]['생산지역'])
    top_9_price = list(top9_df[top9_df['종류'] == k].iloc[1:10]['가격'])

    # 추천 와인 이름을 담기 위한 empty list 생성
    top_9_name = []

    # id list
    for i in top_9_indexes:
        name = data.loc[i]['이름']
        top_9_name.append(name)

    result_dict = {
        'id': top_9_id,
        'name': top_9_name,
        'kind': top_9_kind,
        'sugar': top_9_sugar,
        'acid': top_9_acid,
        'body': top_9_body,
        'tanin': top_9_tanin,
        'food': top_9_food,
        'aroma': top_9_aroma,
        'region': top_9_region,
        'price': top_9_price,
    }

    return result_dict