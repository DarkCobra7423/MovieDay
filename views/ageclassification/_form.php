<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Ageclassification */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="ageclassification-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'ageclassification')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
