<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Chapter;

/**
 * ChapterSearch represents the model behind the search form of `app\models\Chapter`.
 */
class ChapterSearch extends Chapter
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['idcapter', 'fkseason'], 'integer'],
            [['name', 'file', 'duration'], 'safe'],
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
        $query = Chapter::find();

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
            'idcapter' => $this->idcapter,
            'duration' => $this->duration,
            'fkseason' => $this->fkseason,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'file', $this->file]);

        return $dataProvider;
    }
}
