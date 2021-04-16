<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\ViewSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="view-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'idview') ?>

    <?= $form->field($model, 'fkprofile') ?>

    <?= $form->field($model, 'fkcapter') ?>

    <?= $form->field($model, 'valoration') ?>

    <?= $form->field($model, 'view') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
