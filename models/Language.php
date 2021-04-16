<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "language".
 *
 * @property int $idlanguage
 * @property string $language
 *
 * @property Chapterlanguage[] $chapterlanguages
 * @property Chapter[] $fkchapters
 */
class Language extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'language';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['language'], 'required'],
            [['language'], 'string', 'max' => 45],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idlanguage' => 'Id',
            'language' => 'Language',
        ];
    }

    /**
     * Gets query for [[Chapterlanguages]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getChapterlanguages()
    {
        return $this->hasMany(Chapterlanguage::className(), ['fklanguage' => 'idlanguage']);
    }

    /**
     * Gets query for [[Fkchapters]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkchapters()
    {
        return $this->hasMany(Chapter::className(), ['idcapter' => 'fkchapter'])->viaTable('chapterlanguage', ['fklanguage' => 'idlanguage']);
    }
}
