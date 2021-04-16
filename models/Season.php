<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "season".
 *
 * @property int $idseason
 * @property int $season
 * @property string $picture
 * @property int $fkmultimedia
 * @property string $year
 *
 * @property Chapter[] $chapters
 * @property Multimedia $fkmultimedia0
 */
class Season extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'season';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['season', 'picture', 'fkmultimedia', 'year'], 'required'],
            [['season', 'fkmultimedia'], 'integer'],
            [['year'], 'safe'],
            [['picture'], 'string', 'max' => 255],
            [['fkmultimedia'], 'exist', 'skipOnError' => true, 'targetClass' => Multimedia::className(), 'targetAttribute' => ['fkmultimedia' => 'idmultimedia']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idseason' => 'Id',
            'season' => 'Season',
            'picture' => 'Picture',
            'fkmultimedia' => 'Multimedia',
            'year' => 'Year',
        ];
    }

    /**
     * Gets query for [[Chapters]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getChapters()
    {
        return $this->hasMany(Chapter::className(), ['fkseason' => 'idseason']);
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
