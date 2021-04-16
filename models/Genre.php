<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "genre".
 *
 * @property int $idgenre
 * @property string $genre
 *
 * @property Genremultimedia[] $genremultimedia
 * @property Multimedia[] $fkmultimedia
 */
class Genre extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'genre';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['genre'], 'required'],
            [['genre'], 'string', 'max' => 45],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idgenre' => 'Id',
            'genre' => 'Genre',
        ];
    }

    /**
     * Gets query for [[Genremultimedia]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getGenremultimedia()
    {
        return $this->hasMany(Genremultimedia::className(), ['fkgenre' => 'idgenre']);
    }

    /**
     * Gets query for [[Fkmultimedia]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkmultimedia()
    {
        return $this->hasMany(Multimedia::className(), ['idmultimedia' => 'fkmultimedia'])->viaTable('genremultimedia', ['fkgenre' => 'idgenre']);
    }
}
