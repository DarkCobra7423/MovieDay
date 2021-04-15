<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\ProtagonistSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Protagonists';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="protagonist-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Protagonist', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'idprotagonist',
            'protagonist',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
