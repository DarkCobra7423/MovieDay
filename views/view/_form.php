<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\View */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="view-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'fkprofile')->textInput() ?>

    <?= $form->field($model, 'fkcapter')->textInput() ?>

    <?= $form->field($model, 'valoration')->textInput() ?>

    <?= $form->field($model, 'view')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
