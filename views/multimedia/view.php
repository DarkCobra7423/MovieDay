<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Multimedia */

$this->title = $model->idmultimedia;
$this->params['breadcrumbs'][] = ['label' => 'Multimedia', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="multimedia-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->idmultimedia], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->idmultimedia], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'idmultimedia:datetime',
            'titulo',
            'description',
            'year',
            'file',
            'trailer',
            'fkcategory',
            'fkageclassification',
            'fktipoformat',
            'fkaudio',
        ],
    ]) ?>

</div>
