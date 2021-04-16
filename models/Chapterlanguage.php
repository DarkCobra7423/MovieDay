<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "chapterlanguage".
 *
 * @property int $fkchapter
 * @property int $fklanguage
 *
 * @property Chapter $fkchapter0
 * @property Language $fklanguage0
 */
class Chapterlanguage extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'chapterlanguage';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['fkchapter', 'fklanguage'], 'required'],
            [['fkchapter', 'fklanguage'], 'integer'],
            [['fkchapter', 'fklanguage'], 'unique', 'targetAttribute' => ['fkchapter', 'fklanguage']],
            [['fkchapter'], 'exist', 'skipOnError' => true, 'targetClass' => Chapter::className(), 'targetAttribute' => ['fkchapter' => 'idcapter']],
            [['fklanguage'], 'exist', 'skipOnError' => true, 'targetClass' => Language::className(), 'targetAttribute' => ['fklanguage' => 'idlanguage']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'fkchapter' => 'Chapter',
            'fklanguage' => 'Language',
        ];
    }

    /**
     * Gets query for [[Fkchapter0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkchapter0()
    {
        return $this->hasOne(Chapter::className(), ['idcapter' => 'fkchapter']);
    }

    /**
     * Gets query for [[Fklanguage0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFklanguage0()
    {
        return $this->hasOne(Language::className(), ['idlanguage' => 'fklanguage']);
    }
}
