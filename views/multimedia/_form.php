<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\Category;
use app\models\Ageclassification;
use app\models\Tipoformat;
use app\models\Audio;

$category = ArrayHelper::map(Category::find()->all(), 'idcategory', 'category');
$ageclassification = ArrayHelper::map(Ageclassification::find()->all(), 'idageclassification', 'ageclassification');
$tipoformat = ArrayHelper::map(Tipoformat::find()->all(), 'idtipoformat', 'tipoformat');
$audio = ArrayHelper::map(Audio::find()->all(), 'idaudio', 'audio');

/* @var $this yii\web\View */
/* @var $model app\models\Multimedia */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="multimedia-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'titulo')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'year')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'file')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'trailer')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'fkcategory')->dropDownList($category, ['prompt' => 'Seleccionar uno']) ?>

    <?= $form->field($model, 'fkageclassification')->dropDownList($ageclassification, ['prompt' => 'Seleccionar uno']) ?>

    <?= $form->field($model, 'fktipoformat')->dropDownList($tipoformat, ['prompt' => 'Seleccionar uno']) ?>

    <?= $form->field($model, 'fkaudio')->dropDownList($audio, ['prompt' => 'Seleccionar uno']) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
