<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Multimediaprotagonist */

$this->title = 'Update Multimediaprotagonist: ' . $model->fkmultimedia;
$this->params['breadcrumbs'][] = ['label' => 'Multimediaprotagonists', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->fkmultimedia, 'url' => ['view', 'fkmultimedia' => $model->fkmultimedia, 'fkprotagonist' => $model->fkprotagonist]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="multimediaprotagonist-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
