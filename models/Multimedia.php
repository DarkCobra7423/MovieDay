<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "multimedia".
 *
 * @property int $idmultimedia
 * @property string $titulo
 * @property string $description
 * @property string $year
 * @property string $file
 * @property string $trailer
 * @property int $fkcategory
 * @property int $fkageclassification
 * @property int $fktipoformat
 * @property int $fkaudio
 *
 * @property Genremultimedia[] $genremultimedia
 * @property Genre[] $fkgenres
 * @property Ageclassification $fkageclassification0
 * @property Audio $fkaudio0
 * @property Category $fkcategory0
 * @property Tipoformat $fktipoformat0
 * @property Multimediaprotagonist[] $multimediaprotagonists
 * @property Protagonist[] $fkprotagonists
 * @property Season[] $seasons
 */
class Multimedia extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'multimedia';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['titulo', 'description', 'year', 'file', 'trailer', 'fkcategory', 'fkageclassification', 'fktipoformat', 'fkaudio'], 'required'],
            [['description', 'year'], 'safe'],
            [['fkcategory', 'fkageclassification', 'fktipoformat', 'fkaudio'], 'integer'],
            [['titulo', 'file', 'trailer'], 'string', 'max' => 255],
            [['fkageclassification'], 'exist', 'skipOnError' => true, 'targetClass' => Ageclassification::className(), 'targetAttribute' => ['fkageclassification' => 'idageclassification']],
            [['fkaudio'], 'exist', 'skipOnError' => true, 'targetClass' => Audio::className(), 'targetAttribute' => ['fkaudio' => 'idaudio']],
            [['fkcategory'], 'exist', 'skipOnError' => true, 'targetClass' => Category::className(), 'targetAttribute' => ['fkcategory' => 'idcategory']],
            [['fktipoformat'], 'exist', 'skipOnError' => true, 'targetClass' => Tipoformat::className(), 'targetAttribute' => ['fktipoformat' => 'idtipoformat']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idmultimedia' => 'Id',
            'titulo' => 'Titulo',
            'description' => 'Description',
            'year' => 'Year',
            'file' => 'File',
            'trailer' => 'Trailer',
            'fkcategory' => 'Category',
            'fkageclassification' => 'Age Classification',
            'fktipoformat' => 'Format Type',
            'fkaudio' => 'Audio',
        ];
    }

    /**
     * Gets query for [[Genremultimedia]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getGenremultimedia()
    {
        return $this->hasMany(Genremultimedia::className(), ['fkmultimedia' => 'idmultimedia']);
    }

    /**
     * Gets query for [[Fkgenres]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkgenres()
    {
        return $this->hasMany(Genre::className(), ['idgenre' => 'fkgenre'])->viaTable('genremultimedia', ['fkmultimedia' => 'idmultimedia']);
    }

    /**
     * Gets query for [[Fkageclassification0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkageclassification0()
    {
        return $this->hasOne(Ageclassification::className(), ['idageclassification' => 'fkageclassification']);
    }

    /**
     * Gets query for [[Fkaudio0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkaudio0()
    {
        return $this->hasOne(Audio::className(), ['idaudio' => 'fkaudio']);
    }

    /**
     * Gets query for [[Fkcategory0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkcategory0()
    {
        return $this->hasOne(Category::className(), ['idcategory' => 'fkcategory']);
    }

    /**
     * Gets query for [[Fktipoformat0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFktipoformat0()
    {
        return $this->hasOne(Tipoformat::className(), ['idtipoformat' => 'fktipoformat']);
    }

    /**
     * Gets query for [[Multimediaprotagonists]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getMultimediaprotagonists()
    {
        return $this->hasMany(Multimediaprotagonist::className(), ['fkmultimedia' => 'idmultimedia']);
    }

    /**
     * Gets query for [[Fkprotagonists]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkprotagonists()
    {
        return $this->hasMany(Protagonist::className(), ['idprotagonist' => 'fkprotagonist'])->viaTable('multimediaprotagonist', ['fkmultimedia' => 'idmultimedia']);
    }

    /**
     * Gets query for [[Seasons]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getSeasons()
    {
        return $this->hasMany(Season::className(), ['fkmultimedia' => 'idmultimedia']);
    }
}
