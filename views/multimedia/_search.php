<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\MultimediaSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="multimedia-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'idmultimedia') ?>

    <?= $form->field($model, 'titulo') ?>

    <?= $form->field($model, 'description') ?>

    <?= $form->field($model, 'year') ?>

    <?= $form->field($model, 'file') ?>

    <?php // echo $form->field($model, 'trailer') ?>

    <?php // echo $form->field($model, 'fkcategory') ?>

    <?php // echo $form->field($model, 'fkageclassification') ?>

    <?php // echo $form->field($model, 'fktipoformat') ?>

    <?php // echo $form->field($model, 'fkaudio') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
