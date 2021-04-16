<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "audio".
 *
 * @property int $idaudio
 * @property string|null $audio
 *
 * @property Multimedia[] $multimedia
 */
class Audio extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'audio';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['audio'], 'string', 'max' => 20],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idaudio' => 'Id',
            'audio' => 'Audio',
        ];
    }

    /**
     * Gets query for [[Multimedia]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getMultimedia()
    {
        return $this->hasMany(Multimedia::className(), ['fkaudio' => 'idaudio']);
    }
}
