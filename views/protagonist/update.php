<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Protagonist */

$this->title = 'Update Protagonist: ' . $model->idprotagonist;
$this->params['breadcrumbs'][] = ['label' => 'Protagonists', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->idprotagonist, 'url' => ['view', 'id' => $model->idprotagonist]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="protagonist-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
