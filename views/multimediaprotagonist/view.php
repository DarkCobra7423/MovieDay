<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Multimediaprotagonist */

$this->title = $model->fkmultimedia;
$this->params['breadcrumbs'][] = ['label' => 'Multimediaprotagonists', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="multimediaprotagonist-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'fkmultimedia' => $model->fkmultimedia, 'fkprotagonist' => $model->fkprotagonist], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'fkmultimedia' => $model->fkmultimedia, 'fkprotagonist' => $model->fkprotagonist], [
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
            'fkmultimedia:datetime',
            'fkprotagonist',
        ],
    ]) ?>

</div>
