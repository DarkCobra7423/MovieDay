<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\Multimedia;

$multimedia = ArrayHelper::map(Multimedia::find()->all(), 'idmultimedia', 'titulo');

/* @var $this yii\web\View */
/* @var $model app\models\Season */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="season-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'season')->textInput() ?>

    <?= $form->field($model, 'picture')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'fkmultimedia')->dropDownList($multimedia, ['prompt' => 'Seleccione uno']) ?>

    <?= $form->field($model, 'year')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
