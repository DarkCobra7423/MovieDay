<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "ageclassification".
 *
 * @property int $idageclassification
 * @property string $ageclassification
 *
 * @property Multimedia[] $multimedia
 */
class Ageclassification extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'ageclassification';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['ageclassification'], 'required'],
            [['ageclassification'], 'string', 'max' => 20],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idageclassification' => 'Id',
            'ageclassification' => 'Age Classification',
        ];
    }

    /**
     * Gets query for [[Multimedia]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getMultimedia()
    {
        return $this->hasMany(Multimedia::className(), ['fkageclassification' => 'idageclassification']);
    }
}
