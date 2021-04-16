<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Multimedia;

/**
 * MultimediaSearch represents the model behind the search form of `app\models\Multimedia`.
 */
class MultimediaSearch extends Multimedia
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['idmultimedia', 'fkcategory', 'fkageclassification', 'fktipoformat', 'fkaudio'], 'integer'],
            [['titulo', 'description', 'year', 'file', 'trailer'], 'safe'],
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
        $query = Multimedia::find();

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
            'idmultimedia' => $this->idmultimedia,
            'description' => $this->description,
            'year' => $this->year,
            'fkcategory' => $this->fkcategory,
            'fkageclassification' => $this->fkageclassification,
            'fktipoformat' => $this->fktipoformat,
            'fkaudio' => $this->fkaudio,
        ]);

        $query->andFilterWhere(['like', 'titulo', $this->titulo])
            ->andFilterWhere(['like', 'file', $this->file])
            ->andFilterWhere(['like', 'trailer', $this->trailer]);

        return $dataProvider;
    }
}
