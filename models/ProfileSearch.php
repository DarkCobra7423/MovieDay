<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Profile;

/**
 * ProfileSearch represents the model behind the search form of `app\models\Profile`.
 */
class ProfileSearch extends Profile {

    public $username;

    /**
     * {@inheritdoc}
     */
    public function rules() {
        return [
            [['idprofile', 'fkuser'], 'integer'],
            [['name', 'lastname', 'motherlastname', 'birth', 'photo', 'username'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios() {
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
    public function search($params) {
        $query = Profile::find();
        $query = $query->joinWith(['fkuser0']);

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $dataProvider->setSort([
            'attributes' => [
                'idprofile',
                'name',
                'lastname',
                'motherlastname',
                'birth',
                'photo',
                //'fkuser',
                'username' => [
                    'asc' => ['username' => SORT_ASC],
                    'desc' => ['username' => SORT_DESC],
                    'default' => SORT_ASC],
            ]
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'idprofile' => $this->idprofile,
            'birth' => $this->birth,
            'fkuser' => $this->fkuser,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
                ->andFilterWhere(['like', 'lastname', $this->lastname])
                ->andFilterWhere(['like', 'motherlastname', $this->motherlastname])
                ->andFilterWhere(['like', 'photo', $this->photo])
                ->andFilterWhere(['like', 'username', $this->username]);

        return $dataProvider;
    }

}
