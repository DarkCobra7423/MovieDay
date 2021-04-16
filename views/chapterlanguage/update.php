<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Chapterlanguage */

$this->title = 'Update Chapter language: ' . $model->fkchapter;
$this->params['breadcrumbs'][] = ['label' => 'Chapterlanguages', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->fkchapter, 'url' => ['view', 'fkchapter' => $model->fkchapter, 'fklanguage' => $model->fklanguage]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="chapterlanguage-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
