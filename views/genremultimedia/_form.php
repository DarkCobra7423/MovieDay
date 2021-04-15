<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Genremultimedia */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="genremultimedia-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'fkgenre')->textInput() ?>

    <?= $form->field($model, 'fkmultimedia')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
