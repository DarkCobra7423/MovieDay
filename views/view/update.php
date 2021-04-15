<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\View */

$this->title = 'Update View: ' . $model->idview;
$this->params['breadcrumbs'][] = ['label' => 'Views', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->idview, 'url' => ['view', 'id' => $model->idview]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="view-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
