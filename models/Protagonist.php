<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "protagonist".
 *
 * @property int $idprotagonist
 * @property string $protagonist
 *
 * @property Multimediaprotagonist[] $multimediaprotagonists
 * @property Multimedia[] $fkmultimedia
 */
class Protagonist extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'protagonist';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['protagonist'], 'required'],
            [['protagonist'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idprotagonist' => 'Idprotagonist',
            'protagonist' => 'Protagonist',
        ];
    }

    /**
     * Gets query for [[Multimediaprotagonists]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getMultimediaprotagonists()
    {
        return $this->hasMany(Multimediaprotagonist::className(), ['fkprotagonist' => 'idprotagonist']);
    }

    /**
     * Gets query for [[Fkmultimedia]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkmultimedia()
    {
        return $this->hasMany(Multimedia::className(), ['idmultimedia' => 'fkmultimedia'])->viaTable('multimediaprotagonist', ['fkprotagonist' => 'idprotagonist']);
    }
}
