<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "category".
 *
 * @property int $idcategory
 * @property string $category
 *
 * @property Multimedia[] $multimedia
 */
class Category extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'category';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['category'], 'required'],
            [['category'], 'string', 'max' => 30],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idcategory' => 'Idcategory',
            'category' => 'Category',
        ];
    }

    /**
     * Gets query for [[Multimedia]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getMultimedia()
    {
        return $this->hasMany(Multimedia::className(), ['fkcategory' => 'idcategory']);
    }
}
