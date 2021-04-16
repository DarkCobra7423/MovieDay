<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\Season;
/* @var $this yii\web\View */
/* @var $model app\models\Chapter */
/* @var $form yii\widgets\ActiveForm */
//$season = ArrayHelper::map(Season::find()->all(), 'idseason', 'season');
$season = ArrayHelper::map(Season::find()->all(), 'idseason', 'season');
?>

<div class="chapter-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'file')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'duration')->textInput() ?>

    <?= $form->field($model, 'fkseason')->dropDownList($season, ['prompt' => 'Select one']) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
