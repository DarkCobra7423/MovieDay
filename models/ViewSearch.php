<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\View;

/**
 * ViewSearch represents the model behind the search form of `app\models\View`.
 */
class ViewSearch extends View
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['idview', 'fkprofile', 'fkcapter', 'valoration', 'view'], 'integer'],
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
        $query = View::find();

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
            'idview' => $this->idview,
            'fkprofile' => $this->fkprofile,
            'fkcapter' => $this->fkcapter,
            'valoration' => $this->valoration,
            'view' => $this->view,
        ]);

        return $dataProvider;
    }
}
