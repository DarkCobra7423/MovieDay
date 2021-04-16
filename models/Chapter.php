<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "chapter".
 *
 * @property int $idcapter
 * @property string $name
 * @property string $file
 * @property string $duration
 * @property int $fkseason
 *
 * @property Season $fkseason0
 * @property Chapterlanguage[] $chapterlanguages
 * @property Language[] $fklanguages
 * @property View[] $views
 */
class Chapter extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'chapter';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'file', 'duration', 'fkseason'], 'required'],
            [['duration'], 'safe'],
            [['fkseason'], 'integer'],
            [['name', 'file'], 'string', 'max' => 255],
            [['fkseason'], 'exist', 'skipOnError' => true, 'targetClass' => Season::className(), 'targetAttribute' => ['fkseason' => 'idseason']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idcapter' => 'Id',
            'name' => 'Name',
            'file' => 'File',
            'duration' => 'Duration',
            'fkseason' => 'Season',
        ];
    }

    /**
     * Gets query for [[Fkseason0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkseason0()
    {
        return $this->hasOne(Season::className(), ['idseason' => 'fkseason']);
    }

    /**
     * Gets query for [[Chapterlanguages]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getChapterlanguages()
    {
        return $this->hasMany(Chapterlanguage::className(), ['fkchapter' => 'idcapter']);
    }

    /**
     * Gets query for [[Fklanguages]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFklanguages()
    {
        return $this->hasMany(Language::className(), ['idlanguage' => 'fklanguage'])->viaTable('chapterlanguage', ['fkchapter' => 'idcapter']);
    }

    /**
     * Gets query for [[Views]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getViews()
    {
        return $this->hasMany(View::className(), ['fkcapter' => 'idcapter']);
    }
}
