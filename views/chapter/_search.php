<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\ChapterSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="chapter-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'idcapter') ?>

    <?= $form->field($model, 'name') ?>

    <?= $form->field($model, 'file') ?>

    <?= $form->field($model, 'duration') ?>

    <?= $form->field($model, 'fkseason') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
