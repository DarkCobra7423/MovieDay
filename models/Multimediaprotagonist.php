<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "multimediaprotagonist".
 *
 * @property int $fkmultimedia
 * @property int $fkprotagonist
 *
 * @property Multimedia $fkmultimedia0
 * @property Protagonist $fkprotagonist0
 */
class Multimediaprotagonist extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'multimediaprotagonist';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['fkmultimedia', 'fkprotagonist'], 'required'],
            [['fkmultimedia', 'fkprotagonist'], 'integer'],
            [['fkmultimedia', 'fkprotagonist'], 'unique', 'targetAttribute' => ['fkmultimedia', 'fkprotagonist']],
            [['fkmultimedia'], 'exist', 'skipOnError' => true, 'targetClass' => Multimedia::className(), 'targetAttribute' => ['fkmultimedia' => 'idmultimedia']],
            [['fkprotagonist'], 'exist', 'skipOnError' => true, 'targetClass' => Protagonist::className(), 'targetAttribute' => ['fkprotagonist' => 'idprotagonist']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'fkmultimedia' => 'Multimedia',
            'fkprotagonist' => 'Protagonist',
        ];
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

    /**
     * Gets query for [[Fkprotagonist0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkprotagonist0()
    {
        return $this->hasOne(Protagonist::className(), ['idprotagonist' => 'fkprotagonist']);
    }
}
