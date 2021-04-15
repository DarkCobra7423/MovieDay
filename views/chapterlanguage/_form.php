<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Chapterlanguage */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="chapterlanguage-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'fkchapter')->textInput() ?>

    <?= $form->field($model, 'fklanguage')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
