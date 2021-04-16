<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "genremultimedia".
 *
 * @property int $fkgenre
 * @property int $fkmultimedia
 *
 * @property Genre $fkgenre0
 * @property Multimedia $fkmultimedia0
 */
class Genremultimedia extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'genremultimedia';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['fkgenre', 'fkmultimedia'], 'required'],
            [['fkgenre', 'fkmultimedia'], 'integer'],
            [['fkgenre', 'fkmultimedia'], 'unique', 'targetAttribute' => ['fkgenre', 'fkmultimedia']],
            [['fkgenre'], 'exist', 'skipOnError' => true, 'targetClass' => Genre::className(), 'targetAttribute' => ['fkgenre' => 'idgenre']],
            [['fkmultimedia'], 'exist', 'skipOnError' => true, 'targetClass' => Multimedia::className(), 'targetAttribute' => ['fkmultimedia' => 'idmultimedia']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'fkgenre' => 'Genre',
            'fkmultimedia' => 'Multimedia',
        ];
    }

    /**
     * Gets query for [[Fkgenre0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkgenre0()
    {
        return $this->hasOne(Genre::className(), ['idgenre' => 'fkgenre']);
    }

    /**
     * Gets query for [[Fkmultimedia0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkmultimedia0()
    {
        return $this->hasOne(Multimedia::className(), ['idmultimedia' => 'fkmultimedia']);
    }
}
