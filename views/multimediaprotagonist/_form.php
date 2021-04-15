<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Multimediaprotagonist */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="multimediaprotagonist-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'fkmultimedia')->textInput() ?>

    <?= $form->field($model, 'fkprotagonist')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
