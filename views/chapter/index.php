<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\ChapterSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Chapters';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="chapter-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Chapter', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'idcapter',
            'name',
            'file',
            'duration',
            'fkseason',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
