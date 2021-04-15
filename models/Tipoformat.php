<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tipoformat".
 *
 * @property int $idtipoformat
 * @property string|null $tipoformat
 *
 * @property Multimedia[] $multimedia
 */
class Tipoformat extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'tipoformat';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['tipoformat'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idtipoformat' => 'Idtipoformat',
            'tipoformat' => 'Tipoformat',
        ];
    }

    /**
     * Gets query for [[Multimedia]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getMultimedia()
    {
        return $this->hasMany(Multimedia::className(), ['fktipoformat' => 'idtipoformat']);
    }
}
