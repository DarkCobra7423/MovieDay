<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "profile".
 *
 * @property int $idprofile
 * @property string $name
 * @property string $lastname
 * @property string $motherlastname
 * @property string $birth
 * @property string $photo
 * @property int $fkuser
 *
 * @property User $fkuser0
 * @property View[] $views
 */
class Profile extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'profile';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'lastname', 'motherlastname', 'birth', 'photo', 'fkuser'], 'required'],
            [['birth'], 'safe'],
            [['fkuser'], 'integer'],
            [['name', 'lastname', 'motherlastname'], 'string', 'max' => 30],
            [['photo'], 'string', 'max' => 255],
            [['fkuser'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['fkuser' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idprofile' => 'Id',
            'name' => 'Name',
            'lastname' => 'Last name',
            'motherlastname' => "Mother's last name",
            'birth' => 'Birth',
            'photo' => 'Photo',
            'fkuser' => 'User',
        ];
    }

    /**
     * Gets query for [[Fkuser0]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFkuser0()
    {
        return $this->hasOne(User::className(), ['id' => 'fkuser']);
    }

    /**
     * Gets query for [[Views]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getViews()
    {
        return $this->hasMany(View::className(), ['fkprofile' => 'idprofile']);
    }
}
