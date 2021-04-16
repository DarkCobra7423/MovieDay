<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Genremultimedia */

$this->title = $model->fkgenre;
$this->params['breadcrumbs'][] = ['label' => 'Genremultimedia', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="genremultimedia-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'fkgenre' => $model->fkgenre, 'fkmultimedia' => $model->fkmultimedia], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'fkgenre' => $model->fkgenre, 'fkmultimedia' => $model->fkmultimedia], [
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
            'fkgenre',
            'fkmultimedia:datetime',
        ],
    ]) ?>

</div>
