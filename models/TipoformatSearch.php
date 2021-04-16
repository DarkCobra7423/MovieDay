<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Tipoformat;

/**
 * TipoformatSearch represents the model behind the search form of `app\models\Tipoformat`.
 */
class TipoformatSearch extends Tipoformat
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['idtipoformat'], 'integer'],
            [['tipoformat'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Tipoformat::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'idtipoformat' => $this->idtipoformat,
        ]);

        $query->andFilterWhere(['like', 'tipoformat', $this->tipoformat]);

        return $dataProvider;
    }
}
