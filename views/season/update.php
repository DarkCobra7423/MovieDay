<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Season */

$this->title = 'Update Season: ' . $model->idseason;
$this->params['breadcrumbs'][] = ['label' => 'Seasons', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->idseason, 'url' => ['view', 'id' => $model->idseason]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="season-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
