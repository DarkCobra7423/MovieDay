<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Chapter */

$this->title = 'Update Chapter: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Chapters', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->idcapter]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="chapter-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
