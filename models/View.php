<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "view".
 *
 * @property int $idview
 * @property int $fkprofile
 * @property int $fkcapter
 * @property int|null $valoration
 * @property int $view
 *
 * @property Chapter $fkcapter0
 * @property Profile $fkprofile0
 */
class View extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'view';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['fkprofile', 'fkcapter', 'view'], 'required'],
            [['fkprofile', 'fkcapter', 'valoration', 'view'], 'integer'],
            [['fkcapter'], 'exist', 'skipOnError' => true, 'targetClass' => Chapter::className(), 'targetAttribute' => ['fkcapter' => 'idcapter']],
            [['fkprofile'], 'exist', 'skipOnError' => true, 'targetClass' => Profile::className(), 'targetAttribute' => ['fkprofile' => 'idprofile']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idview' => 'Idview',
            'fkprofile' => 'Fkprofile',
            'fkcapter' => 'Fkcapter',
            'valoration' => 'Valoration',
            'view' => 'View',
        ];
    }

    /**
     * Gets query for [[Fkcapter0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkcapter0()
    {
        return $this->hasOne(Chapter::className(), ['idcapter' => 'fkcapter']);
    }

    /**
     * Gets query for [[Fkprofile0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkprofile0()
    {
        return $this->hasOne(Profile::className(), ['idprofile' => 'fkprofile']);
    }
}
