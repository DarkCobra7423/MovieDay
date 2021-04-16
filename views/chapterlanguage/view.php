<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Chapterlanguage */

$this->title = $model->fkchapter;
$this->params['breadcrumbs'][] = ['label' => 'Chapterlanguages', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="chapterlanguage-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'fkchapter' => $model->fkchapter, 'fklanguage' => $model->fklanguage], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'fkchapter' => $model->fkchapter, 'fklanguage' => $model->fklanguage], [
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
            'fkchapter',
            'fklanguage',
        ],
    ]) ?>

</div>
