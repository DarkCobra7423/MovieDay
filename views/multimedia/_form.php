<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

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

    <?= $form->field($model, 'fkcategory')->textInput() ?>

    <?= $form->field($model, 'fkageclassification')->textInput() ?>

    <?= $form->field($model, 'fktipoformat')->textInput() ?>

    <?= $form->field($model, 'fkaudio')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
